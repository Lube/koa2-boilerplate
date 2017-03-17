export default function(e) {
    return e.errors.map(error => ({[error.path]: error.message}))
} 