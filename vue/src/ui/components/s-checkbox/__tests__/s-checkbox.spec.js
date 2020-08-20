import { shallowMount } from '@vue/test-utils'
import SCheckbox from '../s-checkbox'

describe('s-checkbox', () => {
  let setup

  beforeEach(() => {
    setup = options => shallowMount(SCheckbox, { ...options })
  })

  // it('should render component and match snapshot', () => {
  // const wrapper = setup()

  // expect(wrapper.html()).toMatchSnapshot()
  // })

  it('should update lazyChecked when the checked prop changes', async () => {
    const wrapper = setup({
      propsData: { name: 'foo' }
    })

    expect(wrapper.vm.lazyChecked).toBe(false)

    wrapper.setProps({ checked: true })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.lazyChecked).toBe(true)
  })

  it('should emit updated lazyChecked on change event', async () => {
    const wrapper = setup({
      propsData: { name: 'foo' }
    })
    const input = wrapper.find('input')

    input.trigger('change')
    input.element.checked = true
    input.trigger('change')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change.length).toBe(2)
    expect(wrapper.emitted().change[0]).toEqual([false])
    expect(wrapper.emitted().change[1]).toEqual([true])
  })
})
