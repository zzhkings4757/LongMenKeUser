import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import classify from '@/components/classify'
import listingDetails from '@/components/listingDetails'
import rentalDetails from '@/components/rentalDetails'
import staffList from '@/components/staffList'
import addStaff from '@/components/addStaff'
import showStaff from '@/components/showStaff'
import rentalTerms from '@/components/rentalTerms'
import onekey from '@/components/onekey'
import improveInfor from '@/components/improveInfor'
import user from '@/components/user'
import aboutMine from '@/components/aboutMine'
import submitComment from '@/components/submitComment'
import invitingNow from '@/components/invitingNow'
import servePeroInfo from '@/components/servePeroInfo'
import livingManageAdd from '@/components/livingManageAdd'
import livingManage from '@/components/livingManage'
import allQuestion from '@/components/allQuestion'
import publishIssue from '@/components/publishIssue'
import cancelIssue from '@/components/cancelIssue'
import confirmSettle from '@/components/confirmSettle'
import serviceComment from '@/components/serviceComment'
import bedOrder from '@/components/bedOrder'
import bedOrderDetails from '@/components/bedOrderDetails'
import termContractApplica from '@/components/termContractApplica'
import cancelApplication from '@/components/cancelApplication'
import auditResults from '@/components/auditResults'
import redeem from '@/components/redeem'
import redeemGoods from '@/components/redeemGoods'
import redeemList from '@/components/redeemList'
import addAdress from '@/components/addAdress'
import contract from '@/components/contract'
import searchPage from '@/components/searchPage'
import infoPerfec from '@/components/infoPerfec'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/login',name: 'login',component: login,meta: {title: '登录'}},
    {path: '/',name: 'home',component: home,meta: {title: '首页'}},
    {path: '/classify',name: 'classify',component: classify,meta: {title: '分类'}},
    {path: '/listingDetails',name: 'listingDetails',component: listingDetails,meta: {title: '房源信息'}},
    {path: '/rentalDetails',name: 'rentalDetails',component: rentalDetails,meta: {title: '订单提交'}},
    {path: '/staffList',name: 'staffList',component: staffList,meta: {title: '租户列表'}},
    {path: '/addStaff',name: 'addStaff',component: addStaff,meta: {title: '新增租户'}},
    {path: '/showStaff',name: 'showStaff',component: showStaff,meta: {title: '个人租户信息'}},
    {path: '/rentalTerms',name: 'rentalTerms',component: rentalTerms,meta: {title: '租房条款'}},
    {path: '/onekey',name: 'onekey',component: onekey,meta: {title: '一键租房'}},
    {path: '/improveInfor',name: 'improveInfor',component: improveInfor,meta: {title: '完善信息'}},
    {path: '/user',name: 'user',component: user,meta: {title: '我的'}},
    {path: '/aboutMine',name: 'aboutMine',component: aboutMine,meta: {title: '关于我们'}},
    {path: '/submitComment',name: 'submitComment',component: submitComment,meta: {title: '提交意见'}},
    {path: '/invitingNow',name: 'invitingNow',component: invitingNow,meta: {title: '立即邀请'}},
    {path: '/servePeroInfo',name: 'servePeroInfo',component: servePeroInfo,meta: {title: '服务人员详情'}},
    {path: '/livingManage',name: 'livingManage',component: livingManage,meta: {title: '同住管理'}},
    {path: '/livingManageAdd',name: 'livingManageAdd',component: livingManageAdd,meta: {title: '同住管理添加'}},
    {path: '/allQuestion',name: 'allQuestion',component: allQuestion,meta: {title: '房屋问题综述'}},
    {path: '/publishIssue',name: 'publishIssue',component: publishIssue,meta: {title: '发布问题'}},
    {path: '/cancelIssue',name: 'cancelIssue',component: cancelIssue,meta: {title: '取消问题'}},
    {path: '/confirmSettle',name: 'confirmSettle',component: confirmSettle,meta: {title: '确认解决'}},
    {path: '/serviceComment',name: 'serviceComment',component: serviceComment,meta: {title: '服务评价'}},
    {path: '/bedOrder',name: 'bedOrder',component: bedOrder,meta: {title: '床位订单'}},
    {path: '/bedOrderDetails',name: 'bedOrderDetails',component: bedOrderDetails,meta: {title: '床位订单详情'}},
    {path: '/termContractApplica',name: 'termContractApplica',component: termContractApplica,meta: {title: '终止合同申请'}},
    {path: '/cancelApplication',name: 'cancelApplication',component: cancelApplication,meta: {title: '取消终止合同申请'}},
    {path: '/auditResults',name: 'auditResults',component: auditResults,meta: {title: '审核结果'}},
    {path: '/redeem',name: 'redeem',component: redeem,meta: {title: '积分兑换'}},
    {path: '/redeemGoods',name: 'redeemGoods',component: redeemGoods,meta: {title: '兑换物品详情'}},
    {path: '/redeemList',name: 'redeemList',component: redeemList,meta: {title: '兑换物品列表'}},
    {path: '/addAdress',name: 'addAdress',component: addAdress,meta: {title: '新增收货地址'}},
    {path: '/contract',name: 'contract',component: contract,meta: {title: '合同'}},
    {path: '/searchPage',name: 'searchPage',component: searchPage,meta: {title: '搜索'}},
    {path: '/infoPerfec',name: 'infoPerfec',component: infoPerfec,meta: {title: '...'}}
  ]
})
