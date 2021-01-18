import HomePage from "@/components/pages/HomePage.vue"
import TwitterAnalysisPage from "@/components/pages/TwitterAnalysisPage.vue"
import AtCoderAnalysisPage from "@/components/pages/AtCoderAnalysisPage.vue"
import BlogAnalysisPage from "@/components/pages/BlogAnalysisPage.vue"
import MachineLearningBlogAnalysisPage from "@/components/pages/MachineLearningBlogAnalysisPage.vue"
import CareerPage from "@/components/pages/CareerPage.vue"

export default [{
    path: '/',
    redirect: 'Home'
}, {
    path: '/Home',
    component: HomePage
}, {
    path: '/AtCoderAnalysis',
    component: AtCoderAnalysisPage
}, {
    path: '/TwitterAnalysis',
    component: TwitterAnalysisPage
}, {
    path: '/BlogAnalysis',
    component: BlogAnalysisPage
}, {
    path: '/MachineLearningBlogAnalysis',
    component: MachineLearningBlogAnalysisPage
}, {

    path: '/Career',
    component: CareerPage
}, {
    path: '*',
    redirect: '/'
}]
