import Projects from '../../data/projects';

export const projectSuggestions = Projects.map(val => (
    val.title
));