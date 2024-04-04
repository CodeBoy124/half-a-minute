import subjectData from '$lib/data.json'

class SubjectList {
  constructor() {
    /** @type {{[key: string]: string[]}} */
    // @ts-ignore
    this.data = subjectData
    this.filterOutComments()
    /** @type {string[]} */
    this.subjects = Object.keys(this.data)
  }

  filterOutComments() {
    // remove all keys that start with a '_'
    const isComment = (/** @type {string} */ key) => key.startsWith('_')

    const realKeys = Object.keys(this.data)
      .filter(key => !isComment(key));

    this.data = realKeys.reduce((/** @type {{[key: string]: string[]}} */ acc, key) => {
      acc[key] = this.data[key]
      return acc
    }, {})
  }

  getSubject(/** @type {string} */ subject) {
    if (subject !== "All") {
      return this.data[subject]
    }

    // combine all subjects into one large array
    return this.subjects.reduce((/** @type {string[]} */ acc, key) => {
      acc = acc.concat(this.data[key])
      return acc
    }, []);
  }
}
export const subjects = new SubjectList()

export function getUniqueRandomSubjects(subject = "All", wordCount = 5) {
  const randomIndex = () => Math.floor(Math.random() * subjects.getSubject(subject).length)

  /** @type {number[]} */
  const indexes = []
  for (let i = 0; i < wordCount; i++) {
    let proposedIndex = randomIndex()
    while (indexes.includes(proposedIndex)) {
      proposedIndex = randomIndex()
    }
    indexes.push(proposedIndex)
  }

  return indexes.map(index => subjects.getSubject(subject)[index])
}