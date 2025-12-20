import {format, Locale} from "date-fns";
import {vi} from "date-fns/locale";
import {DDMMYYYY_HHMMSS} from "@/base/common/constants/date-time-format.constant";

class DateTimeFormatter {
    static formatDate(date: Date, formatter: string, locale?: Locale): string {
        return format(date, formatter as any, {locale: locale ?? vi});
    }

    static formatDDMMYYYYHHMMSS(date: Date, locale?: Locale): string {
        return format(date, DDMMYYYY_HHMMSS, {locale: locale ?? vi});
    }
}

export {
    DateTimeFormatter,
}