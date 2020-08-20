import { mount } from '@vue/test-utils'
import SSelect from '../s-select'

describe('s-select', () => {
  let setup

  beforeEach(() => {
    setup = options => mount(SSelect, { ...options })
  })

  // it('should render component and match snapshot', () => {
  // const wrapper = setup()

  // expect(wrapper.html()).toMatchSnapshot()
  // })

  it('should update lazyValue when value prop changes', async () => {
    const wrapper = setup({
      propsData: {
        name: 'foo',
        value: 'foo',
        options: [
          { text: 'Foo', value: 'foo' },
          { text: 'Bar', value: 'bar' }
        ]
      }
    })

    expect(wrapper.vm.lazyValue).toBe('foo')

    wrapper.setProps({ value: 'bar' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.lazyValue).toBe('bar')
  })

  it('should emit updated lazyValue on change event', async () => {
    const wrapper = setup({
      propsData: {
        name: 'foo',
        value: 'foo',
        options: [
          { text: 'Foo', value: 'foo' },
          { text: 'Bar', value: 'bar' }
        ]
      }
    })

    wrapper.trigger('change')
    wrapper.element.value = 'bar'
    wrapper.trigger('change')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change.length).toBe(2)
    expect(wrapper.emitted().change[0]).toEqual(['foo'])
    expect(wrapper.emitted().change[1]).toEqual(['bar'])
  })
})
