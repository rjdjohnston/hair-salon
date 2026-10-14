export type Shop = { slug: string; name: string; state: string; address: string; phone: string; note?: string; source: string }
const rows = [
 ['auburn-hills','Auburn Hills','Michigan','4241 Joslyn Road, Auburn Hills, MI 48326','248-221-5258'],
 ['brighton','Brighton','Michigan','9416 Village Place, Brighton, MI 48116','810-522-5533'],
 ['davison','Davison','Michigan','1216 S. Irish Rd., Davison, MI 48423','810-379-4414'],
 ['grand-blanc','Grand Blanc','Michigan','1052 E. Hill Rd., Grand Blanc, MI 48439','810-771-9771'],
 ['howell','Howell','Michigan','1247 Grand River, Howell, MI 48843','517-518-8674','Home to the Massage Garage. Call for body massage appointments and treatment options.'],
 ['livonia','Livonia','Michigan','33523 8 Mile Road, Livonia, MI 48152','248-957-9526'],
 ['clinton-township','Macomb','Michigan','46882 Romeo Plank Rd., Macomb, MI 48044','586-328-0080','Our former Clinton Township shop has moved to Romeo Plank Road in Macomb. Same crew and phone number, new address.'],
 ['monroe','Monroe','Michigan','1425 N. Telegraph Rd., Frenchtown Township, MI 48162','734-639-2407'],
 ['rochester','Rochester Hills','Michigan','3082 S. Rochester Rd., Rochester Hills, MI 48307','248-805-1988'],
 ['shelby','Shelby Township','Michigan','12405 23 Mile Road, Shelby Township, MI 48315','586-488-3750','Temporarily closed on Mondays. Please call to confirm before visiting.'],
 ['southgate','Southgate','Michigan','18710 Eureka Rd., Southgate, MI 48195','734-288-3895'],
 ['sterling-heights','Sterling Heights','Michigan','36729 Van Dyke Ave., Sterling Heights, MI 48312','586-722-7896','Our former Warren shop is now on Van Dyke Avenue in Sterling Heights.'],
 ['troy','Troy','Michigan','508 W. 14 Mile Rd., Troy, MI 48083','248-206-7935'],
 ['waterford','Waterford','Michigan','6123 Highland Rd., Waterford, MI 48327','248-742-1535'],
 ['westland','Westland','Michigan','37604 Ford Rd., Westland, MI 48185','734-331-3900','The original Hair Mechanix, serving Westland since 2012.'],
 ['jacksonville','Jacksonville · Beach Blvd.','Florida','11702 Beach Blvd., Suite 103, Jacksonville, FL 32246','904-666-5178'],
 ['san-jose-blvd-jacksonville','Jacksonville · Mandarin','Florida','11700 San Jose Blvd., Unit 6, Jacksonville, FL 32223','904-551-2357'],
 ['clearwater','Clearwater','Florida','2659 Roosevelt Blvd., Suite 105, Clearwater, FL 33760','727-748-4800'],
 ['middleburg','Middleburg','Florida','2640 Blanding Blvd., Middleburg, FL 32068','904-734-7070'],
 ['palm-harbor','Palm Harbor','Florida','2641 Alt 19, Suite B, Palm Harbor, FL 34683','727-888-1800'],
 ['st-augustine','St. Augustine · Treaty Oaks','Florida','230 Plaza Blvd., Unit 2, St. Augustine, FL 32086','904-217-8695'],
 ['world-golf','World Golf Village','Florida','105 Murabella Pkwy., St. Augustine, FL 32092','904-342-0868'],
 ['yulee','Yulee','Florida','463155 E. State Rd. 200, Suite 18, Yulee, FL 32097','904-849-7052'],
 ['centerville','Centerville','Ohio','5828 Wilmington Pike, Centerville, OH 45459','740-980-2280'],
 ['bethel-park','Bethel Park','Pennsylvania','4603 Library Rd., #150, Bethel Park, PA 15102','412-837-0880'],
 ['washington-pennsylvania','Washington','Pennsylvania','36 Old Mill Blvd., Washington, PA 15301','878-212-4967'],
 ['morgantown','Morgantown','West Virginia','700 Pierpont Drive, Suite 107, Morgantown, WV 26508','304-413-8080'],
]
export const shops: Shop[] = rows.map(([slug, name, state, address, phone, note]) => ({slug, name, state, address, phone, note, source: `https://hairmx.com/${['clearwater','palm-harbor'].includes(slug) ? '' : 'locations/'}hair-mechanix-${slug}/`}))
export const states = [...new Set(shops.map(shop => shop.state))]
export const phoneHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '')}`
export const directionsUrl = (shop: Shop) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Hair Mechanix ${shop.address}`)}`
export function shopHours(shop: Shop) { return [['Monday',shop.slug === 'shelby' ? 'Closed temporarily' : '10 am – 8 pm'],['Tuesday','10 am – 8 pm'],['Wednesday','10 am – 8 pm'],['Thursday','10 am – 8 pm'],['Friday','9 am – 8 pm'],['Saturday','9 am – 5 pm'],['Sunday','9 am – 3 pm']] }
