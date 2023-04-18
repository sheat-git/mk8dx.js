import { LoungeApiErrorData } from './types/Error.ts'

export class LoungeApiError extends Error {
    readonly type: string
    readonly title: string
    readonly status: number
    readonly traceId: string

    constructor(data: LoungeApiErrorData) {
        super(data.title)
        this.type = data.type
        this.title = data.title
        this.status = data.status
        this.traceId = data.traceId
    }
}
