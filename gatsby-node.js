const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allLevelsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
}
