

const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const volunteerTemplate = path.resolve("src/templates/volunteer/index.js");

  return graphql(`
  {
    Volunteers: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "volunteers"} }}){
      edges{
        node{
          frontmatter {
            path
          } 
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const volunteersSlugs = result.data.Volunteers.edges.map(v => v.node.frontmatter.path);

    volunteersSlugs.forEach(path => {
      createPage({
        path: `/volunteers/${path}`,
        component: volunteerTemplate,
        context: {
          slug: path
        }
      });
    });
  });
};

