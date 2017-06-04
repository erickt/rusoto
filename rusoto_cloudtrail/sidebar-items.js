initSidebarItems({"enum":[["AddTagsError","Errors returned by AddTags"],["CreateTrailError","Errors returned by CreateTrail"],["DeleteTrailError","Errors returned by DeleteTrail"],["DescribeTrailsError","Errors returned by DescribeTrails"],["GetEventSelectorsError","Errors returned by GetEventSelectors"],["GetTrailStatusError","Errors returned by GetTrailStatus"],["ListPublicKeysError","Errors returned by ListPublicKeys"],["ListTagsError","Errors returned by ListTags"],["LookupEventsError","Errors returned by LookupEvents"],["PutEventSelectorsError","Errors returned by PutEventSelectors"],["RemoveTagsError","Errors returned by RemoveTags"],["StartLoggingError","Errors returned by StartLogging"],["StopLoggingError","Errors returned by StopLogging"],["UpdateTrailError","Errors returned by UpdateTrail"]],"struct":[["AddTagsRequest","<p>Specifies the tags to add to a trail.</p>"],["AddTagsResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["CloudTrailClient","A client for the CloudTrail API."],["CreateTrailRequest","<p>Specifies the settings for each trail.</p>"],["CreateTrailResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["DataResource","<p>The Amazon S3 objects that you specify in your event selectors for your trail to log data events. Data events are object level API operations that access S3 objects, such as <code>GetObject</code>, <code>DeleteObject</code>, and <code>PutObject</code>. You can specify up to 50 S3 buckets and object prefixes for an event selector. </p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify an S3 bucket and an empty prefix, such as <code>arn:aws:s3:::bucket-1/</code>.</p> </li> <li> <p>You upload an image file to <code>bucket-1</code>.</p> </li> <li> <p>The <code>PutObject</code> API operation occurs on an object in the S3 bucket that you specified in the event selector. The trail processes and logs the event.</p> </li> <li> <p>You upload another image file to a different S3 bucket named <code>arn:aws:s3:::bucket-2</code>.</p> </li> <li> <p>The event occurs on an object in an S3 bucket that you didn't specify in the event selector. The trail doesn’t log the event.</p> </li> </ol>"],["DeleteTrailRequest","<p>The request that specifies the name of a trail to delete.</p>"],["DeleteTrailResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["DescribeTrailsRequest","<p>Returns information about the trail.</p>"],["DescribeTrailsResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["Event","<p>Contains information about an event that was returned by a lookup request. The result includes a representation of a CloudTrail event.</p>"],["EventSelector","<p>Use event selectors to specify the types of events that you want your trail to log. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>You can configure up to five event selectors for a trail.</p>"],["GetEventSelectorsRequest",""],["GetEventSelectorsResponse",""],["GetTrailStatusRequest","<p>The name of a trail about which you want the current status.</p>"],["GetTrailStatusResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["ListPublicKeysRequest","<p>Requests the public keys for a specified time range.</p>"],["ListPublicKeysResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["ListTagsRequest","<p>Specifies a list of trail tags to return.</p>"],["ListTagsResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["LookupAttribute","<p>Specifies an attribute and value that filter the events returned.</p>"],["LookupEventsRequest","<p>Contains a request for LookupEvents.</p>"],["LookupEventsResponse","<p>Contains a response to a LookupEvents action.</p>"],["PublicKey","<p>Contains information about a returned public key.</p>"],["PutEventSelectorsRequest",""],["PutEventSelectorsResponse",""],["RemoveTagsRequest","<p>Specifies the tags to remove from a trail.</p>"],["RemoveTagsResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["Resource","<p>Specifies the type and name of a resource referenced by an event.</p>"],["ResourceTag","<p>A resource tag.</p>"],["StartLoggingRequest","<p>The request to CloudTrail to start logging AWS API calls for an account.</p>"],["StartLoggingResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["StopLoggingRequest","<p>Passes the request to CloudTrail to stop logging AWS API calls for the specified account.</p>"],["StopLoggingResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"],["Tag","<p>A custom key-value pair associated with a resource such as a CloudTrail trail.</p>"],["Trail","<p>The settings for a trail.</p>"],["UpdateTrailRequest","<p>Specifies settings to update for the trail.</p>"],["UpdateTrailResponse","<p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>"]],"trait":[["CloudTrail","Trait representing the capabilities of the CloudTrail API. CloudTrail clients implement this trait."]],"type":[["Boolean",""],["ByteBuffer",""],["DataResourceValues",""],["DataResources",""],["Date",""],["EventSelectors",""],["EventsList",""],["LookupAttributeKey",""],["LookupAttributesList",""],["MaxResults",""],["NextToken",""],["PublicKeyList",""],["ReadWriteType",""],["ResourceIdList",""],["ResourceList","<p>A list of resources referenced by the event returned.</p>"],["ResourceTagList","<p>A list of resource tags.</p>"],["TagsList","<p>A list of tags.</p>"],["TrailList",""],["TrailNameList",""]]});