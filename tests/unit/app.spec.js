import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'
import NestedRoute from '@/components/NestedRoute.vue'
import router from '@/router/index.js'

const localVue = createLocalVue()
describe('App', () => {
    test('renders a child component via routing', async () => {
        const wrapper = mount(App, {
            localVue,
            router
        })
        router.push('/nested-route')
        await wrapper.vm.$nextTick()

        expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)
    })
})