import HomePage from "@/components/pages/HomePage.vue"
import SelfAnalysisPage from "@/components/pages/SelfAnalysisPage.vue"
import DetailPage from "@/components/pages/DetailPage.vue"
import UpdatePage from "@/components/pages/UpdatePage.vue"
import DeletePage from "@/components/pages/DeletePage.vue"

export default [{
    path: '/',
    redirect: 'Home'
}, {
    path: '/Home',
    component: HomePage
}, {
    path: '/SelfAnalysis',
    component: SelfAnalysisPage
}, {
    path: '/Detail',
    component: DetailPage
}, {
    path: '/Update',
    component: UpdatePage
}, {
    path: '/Delete',
    component: DeletePage
}, {
    path: '*',
    redirect: '/'
}]
