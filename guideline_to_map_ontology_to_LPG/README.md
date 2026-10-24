# The ontology-to-LPG guideline has moved

The guideline for projecting a W3C ontology (RDF, OWL, SKOS, SHACL) into a Neo4j labelled property graph now lives in the `ontology-to-lpg` skill:

- **Where:** [`aadehamid/personal-agent-skills`, `skills/data/ontology-to-lpg/`](https://github.com/aadehamid/personal-agent-skills/tree/da75164b4edf58288d7c8fa4a1b60128d96fd002/skills/data/ontology-to-lpg), merged in personal-agent-skills #46 (merge commit `da75164`).
- **What is there:** the preparation rules this guideline gave (design rules, inputs, the pipeline), the scripts that run the projection with you, the validation path, and add-ons for Neo4j Aura, `GRAPH TYPE`, SPARQL triple stores and a compose file for local Neo4j with n10s and Jena Fuseki. Its `references/learning-path.md` replaces the learning guide that sat here.
- **Why:** the skill is the one source for the method, so it is no longer copied between repositories.

The last version of the two files that sat here, the Conversion Playbook v2.2 and its learning guide, is in this repository's history at commit [`8ce9ada`](https://github.com/aadehamid/enterprise-people-graph/tree/8ce9ada/guideline_to_map_ontology_to_LPG).
