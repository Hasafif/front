// APIs Credintals





// Semantic Scholar API
const SEM_api_key = '%%%%%%%'
const SEMANTIC_CONFIG = {
  api_url:'https://api.semanticscholar.org/graph/v1/paper/search',
  api_key:SEM_api_key,
  headers:{
    'x-api-key': SEM_api_key
  }
}

// export object
const KEYS = {
  'SEMANTIC_CONFIG':SEMANTIC_CONFIG
}

export default KEYS