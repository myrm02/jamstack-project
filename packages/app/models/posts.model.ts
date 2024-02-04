export interface IPost {
  id: number
  title: string
  description: string
  slug: string
  likes_number: string
  dateOfPublication: string
  etiquettes: ITag[]
  image: Image
  profil: IProfil[]
  comments: IComment[]
}

export interface IComment {
  agree_numbers: string
  content: string
  profil: IProfil
}

export interface IProfil {
  id: number
  username: string
  image: Image
}

export interface ITag {
  id: number
  name: string
  slug: string
}

export interface Image {
  id: number
  name: string
  alternativeText: string
  width: number
  height: number
  url: string
}

export interface PostsData {
  data: IPost[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface PostData {
  data: IPost
}
