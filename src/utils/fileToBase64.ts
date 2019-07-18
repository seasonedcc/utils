type PossibleFile = Promise<string | null | ArrayBuffer>

export async function fileToBase64(file: File): PossibleFile {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort()
      reject(new DOMException('Problem parsing input file.'))
    }
    reader.onloadend = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(file)
  })
}
