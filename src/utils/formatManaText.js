export default (text) => {

  let reg = new RegExp(/{(.*?)}/g); //notice /g, making the expression global
  let matches = text.match(reg);
  let formatted = text;

  let missingIcons = {
    't': 'tap'
  }

  if (matches && matches.length) {
    matches.forEach(match => {
      let stripped = match.replace('{', '').replace('}', '').toLowerCase()
      formatted = formatted.replace(
        match,
        `<i style="margin-right: 3px;" class="ms ms-cost ms-${missingIcons[stripped] || stripped}"></i>
      `)
    })
  }
  return formatted
}