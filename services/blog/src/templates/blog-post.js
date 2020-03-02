import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogPostTemplate = ({data, pageContext}) => {
    const {next, prev} = pageContext
    const { markdownRemark } = data
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div>
            <h1>{title}</h1>
            <div 
                className='blogpost'
                dangerouslySetInnerHTML={{__html: html}}
            />
            <div style={{marginBottom:'1rem'}}>
                {prev && 
                    <Link to={prev.frontmatter.path}>
                        Prev
                    </Link>
                }
            </div>
            <div style={{marginBottom:'1rem'}}>
                {next && 
                    <Link to={next.frontmatter.path}>
                        Next
                    </Link>
                }
            </div>
            <div>
            <Link to='/'>Home</Link>
            </div>
        </div>
    )
}

export const query = graphql 
`
    query($pathSlug: String!) {
        markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export default BlogPostTemplate;