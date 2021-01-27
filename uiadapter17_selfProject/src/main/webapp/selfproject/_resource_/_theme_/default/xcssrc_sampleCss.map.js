(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "cell" :
            			{
            				"class" :
            				[
            					{
            						"bg_summary" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#333333"),
            															"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();

	};
}
)();
