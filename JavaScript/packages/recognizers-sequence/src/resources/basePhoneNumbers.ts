// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------

export namespace BasePhoneNumbers {
	export const NumberReplaceToken = '@builtin.phonenumber';
	export const GeneralPhoneNumberRegex = `(\\b((\\d[\\s]?){7,15}\\d)\\b)`;
	export const BrazilPhoneNumberRegex = `(((\\B\\(\\s?))\\d{2,3}(\\s?\\))|(\\b\\d{2,3}))\\s?\\d{4,5}-?\\d{3,5}\\b`;
	export const UkPhoneNumberRegex = `(((\\b(00)|\\B\\+)\\s?)?\\b\\d{2}\\s?(\\(0\\))?\\d{3,5}[/-]?\\s?(\\d{7,8}|\\d{3}\\s?\\d{3})\\b)`;
	export const GermanyPhoneNumberRegex = `(\\b(\\d{4}\\s?[-/]?(\\s?\\d){7,8})\\b)`;
	export const USPhoneNumberRegex = `((((\\B\\+)|\\b)1(\\s|-)?)|\\b)?(\\B\\(|\\b)\\d{3}\\)?\\s?-?\\s?\\d{3}\\s?-?\\s?\\d{4}\\b`;
	export const SpecialPhoneNumberRegex = `\\b(\\d{4}[/-]\\d[/-]\\d{3,4})\\b`;
}
