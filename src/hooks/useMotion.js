import { useEffect } from 'react'

// Content stays visible without this enhancement or when motion is disabled.
const targets = [
  '.hero__text > *', '.hero__image', '.section__head', '.shop__head',
  '.section > h2', '.section > .eyebrow', '.section > .container > h2',
  '.section > .container > .eyebrow', '.card', '.cats > li', '.review',
  '.benefits > li', '.guarantees > li', '.trust > li',
  '.details__gallery > *', '.details__text > *',
  '.bundle > *', '.pdp__info > *', '.faq details', '.final__inner > *',
].join(', ')

export default function useMotion() {
  useEffect(() => {
    const root = document.querySelector('main')?.parentElement
    if (!root || !window.IntersectionObserver || !Element.prototype.animate) return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const seen = new WeakSet()
    const active = new Map()
    const cancel = () => {
      active.forEach((animation) => animation.cancel())
      active.clear()
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return
        observer.unobserve(target)
        if (preference.matches || target.contains(document.activeElement)) return
        const index = Array.from(target.parentElement.children).indexOf(target)
        const animation = target.animate(
          [{ opacity: 0, translate: '0 22px' }, { opacity: 1, translate: '0 0' }],
          {
            duration: 650,
            delay: Math.min(index, 3) * 65,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'backwards',
          },
        )
        active.set(target, animation)
        animation.onfinish = () => active.delete(target)
      })
    }, { threshold: 0.08 })

    const register = (node) => {
      if (!(node instanceof Element)) return
      const elements = [...(node.matches(targets) ? [node] : []), ...node.querySelectorAll(targets)]
      elements.forEach((element) => {
        if (seen.has(element)) return
        seen.add(element)
        observer.observe(element)
      })
    }
    register(root)

    // Register new route content and filtered products, without replaying on timer ticks.
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(register))
      active.forEach((animation, element) => {
        if (!element.isConnected) {
          animation.cancel()
          active.delete(element)
        }
      })
    })
    mutations.observe(root, { childList: true, subtree: true })
    const onPreference = () => { if (preference.matches) cancel() }
    const onFocus = (event) => {
      active.forEach((animation, element) => {
        if (element.contains(event.target)) {
          animation.cancel()
          active.delete(element)
        }
      })
    }
    preference.addEventListener('change', onPreference)
    root.addEventListener('focusin', onFocus)
    return () => {
      observer.disconnect()
      mutations.disconnect()
      preference.removeEventListener('change', onPreference)
      root.removeEventListener('focusin', onFocus)
      cancel()
    }
  }, [])
}

