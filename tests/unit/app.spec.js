import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import NestedRoute from '@/components/NestedRoute.vue'
import router from '@/router/index.js'
import About from '@/views/About.vue'

const localVue = createLocalVue()
describe('App', () => {
    test('renders a child component via routing', async () => {
        const wrapper = mount(App, {
            localVue,
            router
        })
        router.push('/nested-route')
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(NestedRoute).exists()).toBe(true);
        console.log(router.currentRoute)
    })

    test('renders a component via routing', async () => {
        const wrapper = mount(App, {
            localVue,
            router
        })
        router.push('/about')
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(About).exists()).toBe(true)

    })
})