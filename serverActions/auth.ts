'use server'

export async function signIn(formData: FormData) {
    const id = formData.get('id')
    const pw = formData.get('pw')

    console.log('로그인 완료', id, pw)
}

export async function signOut() {
    // 서버 액션을 클라이언트나, 서버 클라이언트에서도 다 호출해서 사용가능하다
    console.log('로그아웃!')
}