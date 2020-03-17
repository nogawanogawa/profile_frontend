import HomePage from "@/components/pages/HomePage.vue"
import TwitterAnalysisPage from "@/components/pages/TwitterAnalysisPage.vue"
import BlogAnalysisPage from "@/components/pages/BlogAnalysisPage.vue"
import UpdatePage from "@/components/pages/UpdatePage.vue"
import DeletePage from "@/components/pages/DeletePage.vue"

export default [{
    path: '/',
    redirect: 'Home'
}, {
    path: '/Home',
    component: HomePage
}, {
    path: '/TwitterAnalysis',
    component: TwitterAnalysisPage
}, {
    path: '/BlogAnalysis',
    component: BlogAnalysisPage
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
