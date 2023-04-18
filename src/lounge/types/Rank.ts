import { Division } from './Division.ts'

// https://github.com/VikeMK/Lounge-API/blob/main/src/Lounge.Web/Models/ViewModels/Rank.cs
export type Rank = {
    division: Division
    level?: 1 | 2
    name: string
}
