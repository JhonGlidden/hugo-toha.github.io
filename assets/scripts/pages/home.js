document.addEventListener('DOMContentLoaded', () => {
  const summaryItems = Array.from(
    document.getElementById('typing-carousel-data')?.children ?? []
  )
    .map((item) => item.textContent?.trim())
    .filter(Boolean)

  const target = document.getElementById('ityped')
  if (target == null || summaryItems.length === 0) return

  const typeDelayMs = 45
  const eraseDelayMs = 22
  const holdDelayMs = 1200
  const betweenDelayMs = 250
  let phraseIndex = 0

  const typePhrase = (phrase, done) => {
    let charIndex = 0
    const typeStep = () => {
      target.textContent = phrase.slice(0, charIndex)
      if (charIndex <= phrase.length) {
        charIndex += 1
        setTimeout(typeStep, typeDelayMs)
      } else {
        setTimeout(done, holdDelayMs)
      }
    }
    typeStep()
  }

  const erasePhrase = (done) => {
    let text = target.textContent ?? ''
    const eraseStep = () => {
      target.textContent = text
      if (text.length > 0) {
        text = text.slice(0, -1)
        setTimeout(eraseStep, eraseDelayMs)
      } else {
        setTimeout(done, betweenDelayMs)
      }
    }
    eraseStep()
  }

  const loop = () => {
    const phrase = summaryItems[phraseIndex]
    typePhrase(phrase, () => {
      erasePhrase(() => {
        phraseIndex = (phraseIndex + 1) % summaryItems.length
        loop()
      })
    })
  }

  loop()
})
