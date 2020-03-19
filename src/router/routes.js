import HomePage from "@/components/pages/HomePage.vue"
import TwitterAnalysisPage from "@/components/pages/TwitterAnalysisPage.vue"
import BlogAnalysisPage from "@/components/pages/BlogAnalysisPage.vue"
import CareerPage from "@/components/pages/CareerPage.vue"

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
    path: '/Career',
    component: CareerPage
}, {
    path: '*',
    redirect: '/'
}]
