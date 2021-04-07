import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  const wrapper = mount(Logo)

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('is img tag', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})
