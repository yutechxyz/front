import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import CompositionApi from '@vue/composition-api'
import CompositionSample from "@/components/CompositionSample.vue"

const localVue = createLocalVue()
localVue.use(CompositionApi)
const factory = () => {
  return shallowMount(CompositionSample, {
    localVue,
    propsData: { user: { firstName: 'taro', lastName: 'suzuki' } }
  })
}
const sel = (id: string) => `[data-test="${id}"]`

describe('CompositionSample', () => {
  it('render a fullName', () => {
    const wrapper = factory()
    expect(wrapper.find(sel('full-name')).text()).toBe('taro suzuki')
  })
})