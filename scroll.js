// @ts-check
function sindanScroll() {
  const sleep = (sec) => new Promise((resolve) => setTimeout(resolve, sec))

  // 最低間隔を確保したいタイプのリピート処理を行う関数
  const intervalRepeater = async (callback, interval, stopConditions) => {
    while (stopConditions()) {
      const startTime = Date.now() // 時間計測用
      console.log('処理を始めるよ！')

      // 本処理と sleep を同時実行して最低間隔を確保する
      await Promise.all([callback(), sleep(interval())])

      console.log('処理が終わったよ！ 経過時間[ms]:', Date.now() - startTime)
    }
    console.log('すべての処理が終わったよ')
  }

  //   最後の値まで表示する
  let scrollHeight = 0
  intervalRepeater(
    () => {
      /** @type {number} */
      scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      scroll(0, scrollHeight)
      /** @type {any} */
      const nextResults = document.querySelector('#next-results')
      nextResults.click()
    },
    () => Math.random() * 3000,
    () => document.querySelector('#next-results') != null
  )
}
sindanScroll()
