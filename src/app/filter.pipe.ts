import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

//method to convert data
  transform(value: any[],filterString:string,propertyName:string):any {
    const result:any=[]
    if(!value||filterString==""||propertyName=="" )
    {
    return value
    }
    else{
      value.forEach((item:any)=>{
      if(item[propertyName].trim().toLowerCase().includes(filterString.trim().toLowerCase())){
        result.push(item)

      }
      })
      return result
    }
    return null;
  }

}
