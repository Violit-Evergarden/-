<template>
  <div id="employeeContainer">
    <div class="header">
      <div class="left">
        <el-select style="width: 140px" v-model="departFilter" placeholder="请选择">
          <el-option label="所有部门" value="all" />
          <el-option v-for="(item,idx) in departments" :key="idx" :label="item" :value="item" />
        </el-select>
        <el-select style="width: 160px;margin-left: 20px;" v-model="positionFilter" placeholder="请选择">
          <el-option label="所有岗位" value="all" />
          <el-option v-for="(item,idx) in filterPositions" :key="idx" :label="item" :value="item" />
        </el-select>
        <el-input
          v-model="searchValue"
          style="max-width: 600px;margin-left: 20px;"
          placeholder="请输入关键词"
          class="input-with-select"
          clearable
        >
          <template #prepend>
            <el-select v-model="searchFilter" placeholder="请选择" style="width: 100px">
              <el-option v-for="(item,idx) in searchCategory" :key="idx" :label="item" :value="item" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" @click="SearchEmployee" />
          </template>
        </el-input>
      </div>
      <div class="right">
        <el-button @click="addNewEmployee" type="primary">添加员工</el-button>
      </div>
    </div>
    <el-table :data="currentPageData" border style="width: 100%;" max-height="1000px">
      <el-table-column prop="EmployeeID" label="员工ID" min-width="100" />
      <el-table-column prop="Name" label="姓名" min-width="88" />
      <el-table-column prop="Department" label="部门" min-width="100" />
      <el-table-column prop="Position" label="职位" min-width="125"/>
      <el-table-column prop="HireDate" label="入职日期" min-width="110"/>
      <el-table-column prop="Email" label="邮箱" min-width="200" />
      <el-table-column prop="PhoneNumber" label="电话" min-width="130" />
      <el-table-column fixed="right" label="操作" min-width="165">
        <template #default="scope">
          <div class="btnbox">
            <el-button  type="primary" size="small" @click="editEmployeeInfo(scope.$index,scope.row)">
              <span style="margin-right: 4px;">编辑</span>
              <el-icon><edit /></el-icon>
            </el-button>
            <el-button type="danger" size="small" @click="deleteEmployeeInfo(scope.$index,scope.row)">
              <span style="margin-right: 4px;">删除</span>
              <el-icon><Delete /></el-icon>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagenation">
      <div class="pageInfo">
        <div class="size-choose">
          <span>每页显示</span>
          <el-select style="width: 70px" v-model="pageSize" placeholder="请选择">
            <el-option v-for="i in 25" :key="i" :value="i" :label="i" />
          </el-select>
          <span style="margin-left: 8px;">条</span>
        </div>
        <span>共{{tableData.length}}条记录</span>
      </div>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="tableData.length"
      :hide-on-single-page="showPagenation"
      :default-page-size="pageSize"
      @current-change="pageChange"
      :page-count="pageCount"
      />
    </div>
  </div>
  <el-dialog
    v-model="deleteDialogVisible"
    :title="modalTitle"
    width="500"
    @close="modalClose"
  >
    <div class="infobox">
      <div class="deInfo">
        <span>员工ID: </span>
        <el-input disabled :value="editInfo.EmployeeID"/>
      </div>
      <div class="deInfo">
        <span>姓名:</span>
        <el-input v-model="editInfo.Name" clearable/>
      </div>
      <div class="deInfo">
        <span>所在部门:</span>
        <el-select v-model="editInfo.Department" placeholder="请选择" @change="departmentChange">
          <el-option v-for="(item,idx) in departments" :key="idx" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="deInfo">
        <span>岗位:</span>
        <el-select v-model="editInfo.Position" placeholder="请选择">
          <el-option v-for="(item,idx) in positions[editInfo.Department]" :key="idx" :label="item" :value="item" />
        </el-select>
      </div>
      <div class="deInfo">
        <span>入职时间:</span>
        <el-date-picker
          v-model="editInfo.HireDate"
          value-format="YYYY-MM-DD"
          type="date"
          placeholder="选择日期"
        />
      </div>
      <div class="deInfo">
        <span>邮箱:</span>
        <el-input v-model="editInfo.Email" clearable/>
      </div>
      <div class="deInfo">
        <span>电话号码:</span>
        <el-input v-model="editInfo.PhoneNumber" clearable/>
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancelChange">取消</el-button>
        <el-button type="primary" @click="confirmChange">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {ref,reactive,getCurrentInstance,computed} from 'vue'
import { getEmployee,addEmployee,deleteEmployee,editEmployee } from '@/api';
import {Edit,Delete,Search} from '@element-plus/icons-vue'
import { deepClone,isSameObj } from '@/utils';

const {$msgbox,$message,$notify} = getCurrentInstance().proxy
const allEmployeeData = ref([])
const toSearchData = ref([])
const deleteDialogVisible = ref(false)
const editInfo = ref({
  EmployeeID:'',
  Name:'',
  Department:'',
  Position:'',
  Email:'',
  HireDate:'',
  PhoneNumber:''
})
const modalMode = ref('')
const departFilter = ref('all')
const positionFilter = ref('all')
const searchValue = ref('')
const searchFilter = ref('姓名')
const positions = {
  服务产品部:['部门主任','技术评估专员','知识产权专员','科技培育专员','研究专员','外勤专员'],
  战略规划部:['部门主任','战略分析师','政策顾问','项目评估专员','数据分析师'],
  平台建设部:['部门主任','运营经理','技术支持工程师','市场对接专员','活动策划专员'],
  市场发展部:['部门主任','科技评估专员','资源开发专员','企业档案管理员','高级技术交易员'],
  办公室:['人力资源管理','财务管理','行政支持','IT支持']
}
const departments = ['服务产品部','战略规划部','平台建设部','市场发展部','办公室']
const searchCategory = ['姓名','员工ID','部门','职位','入职日期','邮箱','电话号码']
const pageSize = ref(20)
const currentPage = ref(1)
const filterPositions = computed(()=>{
  let allPositions = []
  for(const key of departments){
    allPositions = allPositions.concat(positions[key])
  }
  if(departFilter.value === 'all') allPositions = Array.from(new Set(allPositions))
  else allPositions = positions[departFilter.value]
  return allPositions
})
const modalTitle = computed(()=>modalMode.value==='edit'?'员工信息编辑':"新增员工信息")
let editInfoRecord = {}
const showPagenation = ref(false)

const tableData = computed(()=>{
  let filterData = toSearchData.value
  if(departFilter.value!=='all'){
    filterData=filterData.filter(item=>item.Department===departFilter.value)
  }
  if(positionFilter.value!=='all'){
    filterData=filterData.filter(item=>item.Position===positionFilter.value)
  }
  return filterData
})

const currentPageData = computed(()=>{
  const start = pageSize.value*(currentPage.value-1)
  const end = pageSize.value*currentPage.value
  return tableData.value.slice(start,end)
})

const pageCount = computed(()=>Math.ceil(tableData.value.length/pageSize.value))

function pageChange(page){
  currentPage.value = page
}


function SearchEmployee(){
  if(!searchValue.value) return toSearchData.value = allEmployeeData.value;
  const config = {
    '姓名':'Name',
    '员工ID':'EmployeeID',
    '部门':'Department',
    '职位':'Position',
    '入职日期':'HireDate',
    '邮箱':'Email',
    '电话号码':'PhoneNumber'
  }
  const searchKey = config[searchFilter.value]
  toSearchData.value = allEmployeeData.value.filter(item=>item[searchKey].includes(searchValue.value))
}

function editEmployeeInfo(idx,data){
  modalMode.value = 'edit'
  deleteDialogVisible.value = true
  const copyData = deepClone(data)
  delete copyData.id
  editInfo.value = copyData
  editInfoRecord = deepClone(copyData)
}

function departmentChange(){
  editInfo.value.Position = ''
}

function cancelChange(){
  deleteDialogVisible.value = false
}

async function confirmChange(){
  const {EmployeeID,Name,Department,Position,HireDate,Email,PhoneNumber} = editInfo.value
  if(!EmployeeID || !Name || !Department || !Position || !HireDate || !PhoneNumber) return $message.error('请补充完整员工信息')
  if(!Email) editInfo.value.Email = '无'
  let result = {};
  if(modalMode.value === 'edit'){
    if(isSameObj(editInfo.value,editInfoRecord)) return $message.warning('员工信息未改变')
    result = await editEmployee(editInfo.value)
  }else if(modalMode.value === 'add'){
    result = await addEmployee(editInfo.value)
  }
  if(result.status !== 0) return $message.error(result.message)
  deleteDialogVisible.value = false
  getAllEmployee()
  $message.success(result.message)
}

function modalClose(){
  editInfo.value = {
    EmployeeID:'',
    Name:'',
    Department:'',
    Position:'',
    Email:'',
    HireDate:'',
    PhoneNumber:''
  }
}

function deleteEmployeeInfo(idx,data){
  const {EmployeeID,Name} = data
  $msgbox({
    type:'warning',
    title:'温馨提示',
    message:`是否删除 ${Name} 的员工信息？ (员工ID${EmployeeID})`,
    showCancelButton:true,
    confirmButtonText:'确认',
    cancelButtonText:'取消',
  }).then(async ()=>{
    const result = await deleteEmployee({EmployeeID})
    if(result.status !== 0 ) return $message.error('删除失败')
    $message.success("删除成功")
    getAllEmployee()
  }).catch(()=>console.log('取消删除'))
}

function addNewEmployee(){
  modalMode.value = 'add'
  deleteDialogVisible.value = true
  const allIDS = allEmployeeData.value.map(item=>item.EmployeeID)
  editInfo.value.EmployeeID = Math.max(...allIDS)+1
}

async function getAllEmployee(){
  const result = await getEmployee()
  if(result.status !== 0 ) return $notify.error({message:'获取员工数据失败！'})
  allEmployeeData.value = result.data || []
  toSearchData.value = result.data
}

function main(){
  getAllEmployee()
}

main()



</script>

<style lang="scss" scoped>
#employeeContainer{
  height: calc(100% - 32px);
  background-color: white;
  user-select: none;
  overflow: hidden;
  padding: 16px;
  .btnbox{
    display: flex;
    flex-wrap: nowrap;
  }
  .header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 16px;
    .left{
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      width: 100%;
      
    }
    .right{

    }
  }
  .pagenation{
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
    .pageInfo{
      display: flex;
      align-items: center;
      color: #404041;
      .size-choose{
        display: flex;
        align-items: center;
        margin-right: 16px;
        span{
          margin-right: 8px;
        }
      }
    }
  }
  
}
.infobox{
  padding: 16px 0;
  .deInfo{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 10px;
    span{
      min-width: 80px;
      text-align: right;
      margin-right: 16px;
    }

  }
}
</style>