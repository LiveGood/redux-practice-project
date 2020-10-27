
import { BUY_ICECREAM, STOCK_ICECREAM } from './iceCreamType';

const initialState = {
  numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - action.payload
    }

    case STOCK_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams + Number(action.payload)
    }

    default: return state
  }
}

export default iceCreamReducer

export default function PostRepeater(){
  const postQuery = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
    `)
    
    return(
      <>
        {postQuery.map(instance => 
          <div className="post">
            <h2>{instance.title}</h2>
            <span className="datePosted">{instance.date}</span>
            <span className="readTime"></span>
            <p></p>
            <Link to={instance.path}>Read More</Link>
            <hr />
          </div>
        )}
      </>
    )
}