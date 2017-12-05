// Common layer styles (geography outline) for block, tract, county, and state
// Used by Location and Area Summary maps

export const LayersCartographic = [
  {
    id: 'block',
    source: {
      type: 'vector',
      url: 'mapbox://fcc.9tcqhtt6'
    },
    type: 'line',
    'source-layer': 'nbm2_block2010geojson',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'line-color': '#484896'
    }
  },
  {
    id: 'tract',
    source: {
      type: 'vector',
      url: 'mapbox://fcc.1oj9ffcg'
    },
    type: 'line',
    'source-layer': 'nbm2_tract2010geojson',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'line-color': '#2a3463'
    }
  },
  {
    id: 'county',
    source: {
      type: 'vector',
      url: 'mapbox://fcc.ao2kqazm'
    },
    type: 'line',
    'source-layer': 'nbm2_county2016geojson',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'line-color': '#74994e'
    }
  },
  {
    id: 'state',
    source: {
      type: 'vector',
      url: 'mapbox://fcc.1r5um5ls'
    },
    type: 'line',
    'source-layer': 'nbm2_state2016geojson',
    layout: {
      visibility: 'visible'
    },
    paint: {
      'line-color': '#a9b55c'
    }
  }
]
