import React from "react"
import { StaticQuery, graphql } from 'gatsby'

const TitleAndDescription = ({data}) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'avenir'
        }}>
            <h2 style={{marginBottom: 8}}>{title}</h2>
            <p style={{
                marginTop: 8,
                opacity: 8.5
            }}>
                {description}
            </p>
        </div>
    )
}


const Header = () => {
    return(
        <StaticQuery
            query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => <TitleAndDescription data={data} />}
        />
    )
}

export default Header;