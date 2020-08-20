import { mount } from '@vue/test-utils'
import SButton from '../s-button'

describe('s-button', () => {
  let setup

  beforeEach(() => {
    setup = options => mount(SButton, { ...options })
  })

  // it('should render component and match snapshot', () => {
  // const wrapper = setup()

  // expect(wrapper.html()).toMatchSnapshot()
  // })

  it('should emit the event on click', async () => {
    const wrapper = setup()
    const button = wrapper.find('button')

    button.trigger('click')
    button.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click.length).toBe(2)
  })
})
