import subjectData from '$lib/data.json'
import { get } from 'svelte/store'
import { configStore, previousWordsStore } from './store'

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

function isANewWord(/** @type {string} */ word) {
  const previousWords = get(previousWordsStore)
  return !previousWords.includes(word)
}

function getUniqueRandomSubject(/** @type {string} */ subjectType) {
  const allWords = subjects.getSubject(subjectType);
  let possibleWords = allWords
    .filter(isANewWord);

  if (possibleWords.length <= 0) {
    possibleWords = allWords;
    previousWordsStore.set([])
  }

  const randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
  previousWordsStore.update(old => [
    ...old,
    randomWord
  ])

  return randomWord;
}

export function getUniqueRandomSubjects() {
  const { subjectType, words: wordCount } = get(configStore);

  /** @type {string[]} */ let wordArr = [];
  for (let i = 0; i < wordCount; i++) {
    wordArr.push(getUniqueRandomSubject(subjectType));
  }

  return wordArr;
}