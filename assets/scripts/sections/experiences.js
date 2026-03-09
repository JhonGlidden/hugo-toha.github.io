document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.experiences-section')
  if (section == null) return

  const rows = Array.from(
    section.querySelectorAll('.timeline > .row.align-items-center')
  )
  if (rows.length === 0) return

  const circles = rows.map((row) => row.querySelector('.circle'))
  const links = Array.from(section.querySelectorAll('.timeline > .row.horizontal-line'))

  if (document.getElementById('experiences-dynamic-style') == null) {
    const style = document.createElement('style')
    style.id = 'experiences-dynamic-style'
    style.textContent = `
      .experiences-section .timeline .row.align-items-center.experience-reveal {
        opacity: 0;
        transform: translateY(18px) scale(0.99);
        transition: opacity 450ms ease, transform 450ms ease;
        will-change: transform, opacity;
      }

      .experiences-section .timeline .row.align-items-center.experience-reveal.is-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }

      .experiences-section .timeline .circle {
        transition: transform 260ms ease, box-shadow 260ms ease, opacity 260ms ease;
      }

      .experiences-section .timeline .circle.is-completed {
        opacity: 0.88;
      }

      .experiences-section .timeline .circle.is-active {
        transform: scale(1.1);
      }

      .experiences-section .timeline .circle.experience-icon--engineering {
        background-color: #0b5ed7;
      }

      .experiences-section .timeline .circle.experience-icon--science {
        background-color: #6f42c1;
      }

      .experiences-section .timeline .circle.experience-icon--freelance {
        background-color: #198754;
      }

      .experiences-section .timeline .circle.experience-icon--analytics {
        background-color: #fd7e14;
      }

      .experiences-section .timeline .circle.experience-icon--general {
        background-color: #6c757d;
      }

      .experiences-section .timeline .circle.experience-icon--engineering.is-active {
        box-shadow: 0 0 0 4px rgba(11, 94, 215, 0.25), 0 0 16px rgba(11, 94, 215, 0.45);
      }

      .experiences-section .timeline .circle.experience-icon--science.is-active {
        box-shadow: 0 0 0 4px rgba(111, 66, 193, 0.25), 0 0 16px rgba(111, 66, 193, 0.45);
      }

      .experiences-section .timeline .circle.experience-icon--freelance.is-active {
        box-shadow: 0 0 0 4px rgba(25, 135, 84, 0.25), 0 0 16px rgba(25, 135, 84, 0.45);
      }

      .experiences-section .timeline .circle.experience-icon--analytics.is-active {
        box-shadow: 0 0 0 4px rgba(253, 126, 20, 0.25), 0 0 16px rgba(253, 126, 20, 0.45);
      }

      .experiences-section .timeline .circle.experience-icon--general.is-active {
        box-shadow: 0 0 0 4px rgba(108, 117, 125, 0.25), 0 0 16px rgba(108, 117, 125, 0.45);
      }

      .experiences-section .timeline .row.horizontal-line {
        transition: filter 220ms ease, opacity 220ms ease;
      }

      .experiences-section .timeline .row.horizontal-line.is-completed {
        filter: drop-shadow(0 0 6px rgba(13, 110, 253, 0.35));
      }

      @media (prefers-reduced-motion: reduce) {
        .experiences-section .timeline .row.align-items-center.experience-reveal {
          opacity: 1;
          transform: none;
          transition: none;
        }
      }
    `
    document.head.appendChild(style)
  }

  rows.forEach((row) => row.classList.add('experience-reveal'))

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  rows.forEach((row) => revealObserver.observe(row))

  let ticking = false
  const updateActive = () => {
    const viewportAnchor = window.innerHeight * 0.45
    let activeIndex = 0
    let minDistance = Number.POSITIVE_INFINITY

    rows.forEach((row, index) => {
      const rect = row.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const distance = Math.abs(center - viewportAnchor)
      if (distance < minDistance) {
        minDistance = distance
        activeIndex = index
      }
    })

    circles.forEach((circle, index) => {
      if (circle == null) return
      circle.classList.toggle('is-active', index === activeIndex)
      circle.classList.toggle('is-completed', index < activeIndex)
    })

    links.forEach((line, index) => {
      line.classList.toggle('is-completed', index < activeIndex)
    })

    ticking = false
  }

  const onScroll = () => {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(updateActive)
  }

  updateActive()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
