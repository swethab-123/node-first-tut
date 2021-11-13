const l=require('lodash')
const items=[1,[2,[3,[4]]]]
const newitems=l.flattenDeep(items)
console.log(newitems)