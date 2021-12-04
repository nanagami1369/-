// @ts-check
/**
 * @typedef Sindan
 * @property {string} dateTime
 * @property {string} body
 */

function main() {
  // 値が解ったら集計
  /** @type {string[]} */
  const bodies = [
    ...document.querySelectorAll(
      '.row.align-items-start.mb-3.pb-1.border-bottom .col-10.col-md-11.pl-0 .mb-3'
    ),
  ].map(
    /** @param {any} e */
    (e) => e.innerText
  )
  console.log(bodies.length)
  /** @type {string[]} */
  const dateTimes = [
    ...document.querySelectorAll(
      '.row.align-items-start.mb-3.pb-1.border-bottom .col-10.col-md-11.pl-0 .row.align-items-center.mb-1 .small.col-4.col-sm-3.pl-0.text-right a'
    ),
  ].map(
    /** @param {any} e */
    (e) => e.innerText
  )
  console.log(dateTimes.length)

  const length = bodies.length
  /** @type {Sindan[]} */
  const sindans = []
  for (let index = 0; index < length; index++) {
    sindans.push({ dateTime: dateTimes[index], body: bodies[index] })
  }
  let text = ''
  sindans.forEach(
    (s) =>
      (text += '\n===\n' + s.dateTime + '\n' + s.body + '\n===\n')
  )
  let url = (window.URL || window.webkitURL).createObjectURL(
    new Blob([text], { type: 'text/plain' })
  )
  const a = document.createElement('a')
  a.href = url
  a.download = `sindan_${new Date().toLocaleString()}.txt`
  a.click()
}
main()
