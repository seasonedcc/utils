const isDev = process.env.NODE_ENV === 'development'

export default (isDev ? '' : '/new-react-lib')
