import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/header';

const Layout = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'avenir'
        }}>
            <Header />
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <div key={frontmatter.path}>
                        <Link to={frontmatter.path}>
                            {frontmatter.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export const query = graphql`
    query HomepageQuery {
        allMarkdownRemark(
            sort: {order: DESC, fields: frontmatter___date}
        ) {
            edges {
                node {
                frontmatter {
                    title
                    path
                }
                }
            }
        }
    }
`

export default Layout;