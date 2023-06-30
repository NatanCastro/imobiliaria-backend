export const handleNumberQueryData = (data: string) => {
  return isNaN(Number(data)) ? Number(data) : undefined
}
