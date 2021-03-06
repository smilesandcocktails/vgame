$(document).ready(function () {
  if (responsiveVoice.isPlaying()) {
    responsiveVoice.cancel()
  }

  clickToPause()

  var disabled = false
  var instructions = document.querySelector('.instructions')
  var newLetter = document.querySelector('.newLetter')
  var letter = document.querySelector('.letter')
  var iconDiv = document.querySelector('.icon')

  function speak (msg) {
    responsiveVoice.speak(msg, 'US English Female', { onstart: function () {
      showIcon(iconDiv)
      disabled = true
    }, onend: function () {
      hideIcon(iconDiv)
      disabled = false
    }
    })
  }

  newLetter.textContent = 'f'

  speak(chaptSix.one)

  // e.which for f, j, r, u, d, k, e, i, s, l, w, o, a, ;, q, p, g, h, t, y, spacebar
  var chaptSixSequence = [70, 74, 82, 85, 68, 75, 69, 73, 83, 76, 87, 79, 65, 186, 81, 80, 71, 72, 84, 89]

  var checkIndex = 0

  $(document).keydown(function (e) {
    e.preventDefault()

    if (e.which === 38 || e.which === 39 || e.which === 27) {
      if (responsiveVoice.isPlaying()) {
        responsiveVoice.cancel()
      }

      var nextChapt = '.chaptSevenLink'
      afterAction(e, nextChapt)
    } else {
      if (!disabled) {
        if (responsiveVoice.isPlaying()) {
          responsiveVoice.cancel()
        }
        if (e.which !== chaptSixSequence[checkIndex]) {
          switch (checkIndex) {
            case 0:
              speak(chaptSixMistakes.notF)
              break
            case 1:
              speak(chaptSixMistakes.notJ)
              break
            case 2:
              speak(chaptSixMistakes.notR)
              break
            case 3:
              speak(chaptSixMistakes.notU)
              break
            case 4:
              speak(chaptSixMistakes.notD)
              break
            case 5:
              speak(chaptSixMistakes.notK)
              break
            case 6:
              speak(chaptSixMistakes.notE)
              break
            case 7:
              speak(chaptSixMistakes.notI)
              break
            case 8:
              speak(chaptSixMistakes.notS)
              break
            case 9:
              speak(chaptSixMistakes.notL)
              break
            case 10:
              speak(chaptSixMistakes.notW)
              break
            case 11:
              speak(chaptSixMistakes.notO)
              break
            case 12:
              speak(chaptSixMistakes.notA)
              break
            case 13:
              speak(chaptSixMistakes.notSemicolon)
              break
            case 14:
              speak(chaptSixMistakes.notQ)
              break
            case 15:
              speak(chaptSixMistakes.notP)
              break
            case 16:
              speak(chaptSixMistakes.notG)
              break
            case 17:
              speak(chaptSixMistakes.notH)
              break
            case 18:
              speak(chaptSixMistakes.notT)
              break
            case 19:
              speak(chaptSixMistakes.notY)
              break
            default:
              speak(chaptSix.next)
              break
          }
        } else {
          if (responsiveVoice.isPlaying()) {
            responsiveVoice.cancel()
          }

          switch (checkIndex) {
            case 0:
              speak(chaptSix.two)
              newLetter.textContent = 'j'
              checkIndex++
              break
            case 1:
              speak(chaptSix.three)
              newLetter.textContent = 'r'
              checkIndex++
              break
            case 2:
              speak(chaptSix.four)
              newLetter.textContent = 'u'
              checkIndex++
              break
            case 3:
              speak(chaptSix.five)
              newLetter.textContent = 'd'
              checkIndex++
              break
            case 4:
              speak(chaptSix.six)
              newLetter.textContent = 'k'
              checkIndex++
              break
            case 5:
              speak(chaptSix.seven)
              newLetter.textContent = 'e'
              checkIndex++
              break
            case 6:
              speak(chaptSix.eight)
              newLetter.textContent = 'i'
              checkIndex++
              break
            case 7:
              speak(chaptSix.nine)
              newLetter.textContent = 's'
              checkIndex++
              break
            case 8:
              speak(chaptSix.ten)
              newLetter.textContent = 'l'
              checkIndex++
              break
            case 9:
              speak(chaptSix.eleven)
              newLetter.textContent = 'w'
              checkIndex++
              break
            case 10:
              speak(chaptSix.twelve)
              newLetter.textContent = 'o'
              checkIndex++
              break
            case 11:
              speak(chaptSix.thirteen)
              newLetter.textContent = 'a'
              checkIndex++
              break
            case 12:
              speak(chaptSix.fourteen)
              newLetter.textContent = ';'
              checkIndex++
              break
            case 13:
              speak(chaptSix.fifteen)
              newLetter.textContent = 'q'
              checkIndex++
              break
            case 14:
              speak(chaptSix.sixteen)
              newLetter.textContent = 'p'
              checkIndex++
              break
            case 15:
              speak(chaptSix.seventeen)
              newLetter.textContent = 'g'
              checkIndex++
              break
            case 16:
              speak(chaptSix.eighteen)
              newLetter.textContent = 'h'
              checkIndex++
              break
            case 17:
              speak(chaptSix.nineteen)
              newLetter.textContent = 't'
              checkIndex++
              break
            case 18:
              speak(chaptSix.twenty)
              newLetter.textContent = 'y'
              checkIndex++
              break
            case 19:
              speak(chaptSix.twentyOne)
              speak(chaptSix.next)
              newLetter.textContent = 'y'
              checkIndex++
              break
            default:
              speak(chaptSix.next)
              break
          }
        }
      }
    }
  })
})
