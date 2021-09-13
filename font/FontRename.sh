find . -type f -name 'sf-mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/sf-mono/SF-Mono/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/semi/Semi/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/bold/Bold/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/heavy/Heavy/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/italic/Italic/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/medium/Medium/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/light/Light/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/regular/Regular/')" ;
    mv "${FILE}" "${newfile}" ;
done 

find . -type f -name 'SF-Mono*' | while read FILE ; do
    newfile="$(echo ${FILE} |sed -e 's/webfont/Web/')" ;
    mv "${FILE}" "${newfile}" ;
done 

