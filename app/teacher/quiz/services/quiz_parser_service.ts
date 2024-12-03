interface Option {
  label: string
  text: string
  correct: boolean
}

interface Question {
  number: number
  question: string
  options: Option[]
}

export class QuizParserService {
  parse(content: string): Question[] {
    const questions = content.split(/\n\n/)

    const result: Question[] = []

    questions.forEach((questionBlock) => {
      const lines = questionBlock.split('\n').map((line) => line.trim())

      const questionMatch = lines[0].match(/^(\d+)\.\s*(.+)$/)
      if (!questionMatch) {
        throw new Error(`Format invalide pour la question : ${lines[0]}`)
      }
      const questionNumber = Number.parseInt(questionMatch[1], 10)
      const questionText = questionMatch[2]

      const options = lines.slice(1).map((line) => {
        const optionMatch = line.match(/^([A-Z])\.\s*(.+?)(\s*\(correct\))?$/)
        if (!optionMatch) {
          throw new Error(`Format invalide pour l'option : ${line}`)
        }
        const optionLabel = optionMatch[1]
        const optionText = optionMatch[2]
        const isCorrect = Boolean(optionMatch[3])
        return {
          label: optionLabel,
          text: optionText.trim(),
          correct: isCorrect,
        }
      })
      result.push({
        number: questionNumber,
        question: questionText,
        options: options,
      })
    })
    return result
  }
}
