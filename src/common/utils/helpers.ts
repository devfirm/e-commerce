export const generateOTP = () => {
  const minm = 100000;
  const maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

export const TransformObject = {
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
}