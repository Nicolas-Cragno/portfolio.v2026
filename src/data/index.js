import { profile as esProfile } from './es/profile.js'
import { projects as esProjects } from './es/projects.js'
import { experience as esExperience } from './es/experience.js'
import { profile as enProfile } from './en/profile.js'
import { projects as enProjects } from './en/projects.js'
import { experience as enExperience } from './en/experience.js'

export const data = {
  es: { profile: esProfile, projects: esProjects, experience: esExperience },
  en: { profile: enProfile, projects: enProjects, experience: enExperience },
}

export function getLocale(pathname) {
  return /^\/en\/?$/.test(pathname) ? 'en' : 'es'
}

export function getData(pathname) {
  return data[getLocale(pathname)]
}
