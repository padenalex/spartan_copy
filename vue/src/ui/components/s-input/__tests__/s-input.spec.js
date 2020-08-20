import { mount } from '@vue/test-utils'
import SInput from '../s-input'

describe('s-input', () => {
  let setup

  beforeEach(() => {
    setup = options => mount(SInput, { ...options })
  })

  // it('should render component and match snapshot', () => {
  // const wrapper = setup()

  // expect(wrapper.html()).toMatchSnapshot()
  // })

  it('should update lazyValue when value prop changes', async () => {
    const wrapper = setup({
      propsData: {
        name: 'test',
        value: 'foo'
      }
    })

    expect(wrapper.vm.lazyValue).toBe('foo')

    wrapper.setProps({ value: 'bar' })
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.lazyValue).toBe('bar')
  })

  it('should emit updated lazyValue on input event', async () => {
    const wrapper = setup({
      propsData: { name: 'foo' }
    })

    const input = wrapper.find('input')

    input.trigger('input')
    input.element.value = 'bar'
    input.trigger('input')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input.length).toBe(2)
    expect(wrapper.emitted().input[0]).toEqual([''])
    expect(wrapper.emitted().input[1]).toEqual(['bar'])
  })

  it('should not set id to root element', () => {
    const wrapper = setup({
      attrs: { id: 'foo' },
      propsData: { name: 'foo' }
    })

    const input = wrapper.find('input')
    expect(wrapper.element.id).toBe('')
    expect(input.element.id).toBe('foo')
  })

  it('should set id prop on label', () => {
    const wrapper = setup({
      propsData: { name: 'foo', label: 'foo', id: 'bar' }
    })

    const label = wrapper.find('label')

    expect(label.element.getAttribute('for')).toBe('bar')
  })

  it('should set required attribute on input', () => {
    const wrapper = setup({
      propsData: { name: 'foo', required: true }
    })

    const input = wrapper.find('input')

    expect(input.element.getAttribute('required')).toBe('required')
  })

  it('should set readonly attribute on input', () => {
    const wrapper = setup({
      propsData: { name: 'foo', readonly: true }
    })

    const input = wrapper.find('input')

    expect(input.element.getAttribute('readonly')).toBe('readonly')
  })
})
