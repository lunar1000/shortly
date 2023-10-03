export function template(strings, ...keys) {
  const compile = (...values) => {
    const dict = values[values.length - 1] || {}
    const result = [strings[0]]
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key]
      result.push(value, strings[i + 1])
    })
    return result.join('')
  }
  return function (context) {
    /* 컨텍스트(item)가 매개변수 2개이상이나 단일 객체로 전달되면 문자열 반환
    배열로 전달하면 배열로 반환
    */
    if (arguments.length > 1) return compile(...arguments)
    if (!Array.isArray(context)) return compile(context)
    return {
      compiled: context.map((item) => {
        if (Array.isArray(item)) return compile(...item)
        else return compile(item)
      }),
      render: function (selector) {
        let element = document.querySelector(selector)
        if (!element) false
        element.innerHTML = Array.isArray(this.compiled)
          ? this.compiled.join('')
          : this.compiled
        return true
      },
    }
  }
}
